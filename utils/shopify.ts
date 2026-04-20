export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  variants: ShopifyVariant[];
  available: boolean;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  price: string;
  available: boolean;
}

export interface ShopifyCart {
  id: string;
  webUrl: string;
  lineItems: ShopifyLineItem[];
  totalPrice: string;
}

export interface ShopifyLineItem {
  id: string;
  quantity: number;
  variant: ShopifyVariant;
  title: string;
}

class ShopifyClient {
  private domain: string | undefined;
  private accessToken: string | undefined;
  private isConfigured: boolean;

  constructor() {
    this.domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
    this.accessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
    this.isConfigured = !!(this.domain && this.accessToken);
  }

  public get configured(): boolean {
    return this.isConfigured;
  }

  private async shopifyFetch(query: string, variables?: Record<string, any>) {
    if (!this.isConfigured) {
      throw new Error('Shopify not configured');
    }

    const response = await fetch(`https://${this.domain}/api/2023-10/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': this.accessToken!,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.status}`);
    }

    return response.json();
  }

  public async getProducts(): Promise<ShopifyProduct[]> {
    if (!this.isConfigured) {
      // Return mock data when not configured
      return [
        {
          id: '1',
          title: 'Premium Hair Care Set',
          description: 'Complete hair care routine with shampoo, conditioner, and deep treatment mask from our top-recommended brands.',
          price: '$89.99',
          image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop&crop=top',
          variants: [{
            id: '1',
            title: 'Default',
            price: '$89.99',
            available: true,
          }],
          available: true,
        },
        {
          id: '2',
          title: 'Professional Styling Tools',
          description: 'Salon-grade blow dryer, flat iron, and curling wand set for perfect results at home.',
          price: '$149.99',
          image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&h=600&fit=crop&crop=top',
          variants: [{
            id: '2',
            title: 'Default',
            price: '$149.99',
            available: true,
          }],
          available: true,
        },
        {
          id: '3',
          title: 'Balayage Maintenance Kit',
          description: 'Purple shampoo, toning gloss, and bond-strengthening treatment to keep your color fresh between appointments.',
          price: '$64.99',
          image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop&crop=top',
          variants: [{
            id: '3',
            title: 'Default',
            price: '$64.99',
            available: true,
          }],
          available: true,
        },
        {
          id: '4',
          title: 'Keratin Smoothing Treatment',
          description: 'At-home keratin treatment kit for frizz-free, smooth hair that lasts up to 8 weeks.',
          price: '$79.99',
          image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop&crop=top',
          variants: [{
            id: '4',
            title: 'Default',
            price: '$79.99',
            available: true,
          }],
          available: true,
        },
        {
          id: '5',
          title: 'Curl Defining Collection',
          description: 'Leave-in conditioner, curl cream, and diffuser attachment for bouncy, defined curls.',
          price: '$54.99',
          image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop&crop=entropy',
          variants: [{
            id: '5',
            title: 'Default',
            price: '$54.99',
            available: true,
          }],
          available: true,
        },
        {
          id: '6',
          title: 'Scalp Revival Serum',
          description: 'Nourishing scalp serum with biotin and peptides to promote healthy hair growth and reduce breakage.',
          price: '$44.99',
          image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&h=600&fit=crop&crop=entropy',
          variants: [{
            id: '6',
            title: 'Default',
            price: '$44.99',
            available: false,
          }],
          available: false,
        },
      ];
    }

    const query = `
      query getProducts($first: Int!) {
        products(first: $first) {
          edges {
            node {
              id
              title
              description
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              variants(first: 10) {
                edges {
                  node {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    available
                  }
                }
              }
              available
            }
          }
        }
      }
    `;

    try {
      const { data } = await this.shopifyFetch(query, { first: 10 });
      
      return data.products.edges.map(({ node }: any) => ({
        id: node.id,
        title: node.title,
        description: node.description,
        price: `$${node.priceRange.minVariantPrice.amount}`,
        image: node.images.edges[0]?.node.url || '/images/products/placeholder.jpg',
        variants: node.variants.edges.map(({ node: variant }: any) => ({
          id: variant.id,
          title: variant.title,
          price: `$${variant.price.amount}`,
          available: variant.available,
        })),
        available: node.available,
      }));
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  public async createCart(): Promise<ShopifyCart | null> {
    if (!this.isConfigured) {
      return null;
    }

    const query = `
      mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            id
            checkoutUrl
            lines(first: 10) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                      product {
                        title
                      }
                    }
                  }
                }
              }
            }
            cost {
              totalAmount {
                amount
                currencyCode
              }
            }
          }
        }
      }
    `;

    try {
      const { data } = await this.shopifyFetch(query, { input: {} });
      const cart = data.cartCreate.cart;
      
      return {
        id: cart.id,
        webUrl: cart.checkoutUrl,
        lineItems: cart.lines.edges.map(({ node }: any) => ({
          id: node.id,
          quantity: node.quantity,
          variant: {
            id: node.merchandise.id,
            title: node.merchandise.title,
            price: `$${node.merchandise.price.amount}`,
            available: true,
          },
          title: node.merchandise.product.title,
        })),
        totalPrice: `$${cart.cost.totalAmount.amount}`,
      };
    } catch (error) {
      console.error('Error creating cart:', error);
      return null;
    }
  }

  public async addToCart(cartId: string, variantId: string, quantity: number): Promise<ShopifyCart | null> {
    if (!this.isConfigured) {
      return null;
    }

    const query = `
      mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart {
            id
            checkoutUrl
            lines(first: 10) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                      product {
                        title
                      }
                    }
                  }
                }
              }
            }
            cost {
              totalAmount {
                amount
                currencyCode
              }
            }
          }
        }
      }
    `;

    try {
      const { data } = await this.shopifyFetch(query, {
        cartId,
        lines: [{ merchandiseId: variantId, quantity }],
      });
      
      const cart = data.cartLinesAdd.cart;
      
      return {
        id: cart.id,
        webUrl: cart.checkoutUrl,
        lineItems: cart.lines.edges.map(({ node }: any) => ({
          id: node.id,
          quantity: node.quantity,
          variant: {
            id: node.merchandise.id,
            title: node.merchandise.title,
            price: `$${node.merchandise.price.amount}`,
            available: true,
          },
          title: node.merchandise.product.title,
        })),
        totalPrice: `$${cart.cost.totalAmount.amount}`,
      };
    } catch (error) {
      console.error('Error adding to cart:', error);
      return null;
    }
  }
}

export const shopifyClient = new ShopifyClient();