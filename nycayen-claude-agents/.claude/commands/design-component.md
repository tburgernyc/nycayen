# Design Component

Create a new neomorphic component for the Nycayen website.

Usage: `/design-component [component-name] [type]`

## Arguments
- `component-name`: Name of the component (e.g., ServiceCard, BookingForm, PortfolioItem)
- `type` (optional): Component type - button, card, input, modal, custom (default: custom)

## Examples
```bash
/design-component ServiceCard card
/design-component BookingButton button
/design-component ContactForm custom
/design-component TestimonialSlider custom
```

## Workflow

1. **Analyze Requirements**
   - Understand the component's purpose and context
   - Identify required props and functionality
   - Determine which base components to use

2. **Use Appropriate Agents**
   - Call `neomorph-designer` for design specifications
   - Call `component-builder` to create the component
   - Call `color-system-agent` to ensure proper colors

3. **Create Component Files**
   - Create component file in `/components` directory
   - Add TypeScript interfaces
   - Implement neomorphic styling
   - Add animations with Framer Motion

4. **Test Component**
   - Verify responsive design
   - Test all interactive states
   - Ensure accessibility
   - Check color contrast

5. **Export Component**
   - Add to component index
   - Update documentation
   - Create usage examples

## Component Types

### Button
- Use NeoButton base component
- Add icon support
- Include loading state
- Implement hover/active effects

### Card
- Use NeoCard base component
- Add elevated/flat variants
- Include hover animations
- Support different content types

### Input
- Use NeoInput base component
- Add validation states
- Include helper text
- Support icons

### Modal
- Use NeoModal base component
- Add backdrop blur
- Include close button
- Support different sizes

### Custom
- Start from scratch
- Use neomorphism principles
- Include all necessary features
- Follow component standards

## Output Format

The agent will create:
1. Component file (`.tsx`)
2. Type definitions
3. Usage examples
4. Documentation comments

## Success Criteria

- [ ] Component uses neomorphism color palette
- [ ] Proper shadows applied (elevated/pressed/flat)
- [ ] TypeScript interfaces defined
- [ ] Accessibility attributes included
- [ ] Responsive design implemented
- [ ] Animations smooth and performant
- [ ] Props have sensible defaults
- [ ] Component exported correctly

Start with: "🎨 Designing [component-name] component..."
