# Nycayen Claude Code Agents - Complete Index

## 📁 Directory Structure

```
nycayen-claude-agents/
├── README.md                           # Main documentation
├── .claude/
│   ├── CLAUDE.md                       # Project context file
│   ├── agents/                         # AI agent definitions
│   │   ├── neomorph-designer.md       # Neomorphism design specialist
│   │   ├── color-system-agent.md      # Color palette manager
│   │   ├── component-builder.md       # Component creator
│   │   ├── page-builder.md            # Page constructor
│   │   └── deployment-agent.md        # Deployment manager
│   └── commands/                       # Slash commands
│       ├── design-component.md        # /design-component command
│       ├── apply-neomorph-theme.md    # /apply-neomorph-theme command
│       ├── build-page.md              # /build-page command
│       ├── deploy-staging.md          # /deploy-staging command
│       └── deploy-production.md       # /deploy-production command
```

## 🤖 Agents Summary

### 1. neomorph-designer
- **Model**: opus
- **Purpose**: Specialist in creating neomorphic UI components
- **Best For**: Component design, neomorphism styling, visual design
- **Tools**: Read, Bash, Write, Edit

### 2. color-system-agent
- **Model**: sonnet
- **Purpose**: Manages color palette and theme configuration
- **Best For**: Theme updates, color consistency, Tailwind config
- **Tools**: Read, Bash, Write, Edit

### 3. component-builder
- **Model**: opus
- **Purpose**: Builds reusable React components
- **Best For**: Creating base UI components, TypeScript implementation
- **Tools**: Read, Bash, Write, Edit

### 4. page-builder
- **Model**: opus
- **Purpose**: Constructs complete pages with SEO and performance
- **Best For**: Building entire pages, layout design, content organization
- **Tools**: Read, Bash, Write, Edit

### 5. deployment-agent
- **Model**: sonnet
- **Purpose**: Manages staging and production deployments
- **Best For**: Deployments, testing, verification, monitoring
- **Tools**: Read, Bash, Write, Edit

## ⚡ Commands Summary

### 1. /design-component [name] [type]
- **Purpose**: Create neomorphic components
- **Arguments**: component-name, type (button|card|input|modal|custom)
- **Duration**: 10-20 minutes
- **Example**: `/design-component ServiceCard card`

### 2. /apply-neomorph-theme
- **Purpose**: Apply neomorphism design system globally
- **Arguments**: None
- **Duration**: 30-45 minutes
- **Example**: `/apply-neomorph-theme`

### 3. /build-page [page-name]
- **Purpose**: Build or redesign complete pages
- **Arguments**: home|about|services|portfolio|shop|blog|contact|booking
- **Duration**: 15-30 minutes per page
- **Example**: `/build-page services`

### 4. /deploy-staging
- **Purpose**: Deploy to staging environment
- **Arguments**: None
- **Duration**: ~10 minutes
- **Example**: `/deploy-staging`

### 5. /deploy-production
- **Purpose**: Deploy to production (live site)
- **Arguments**: None
- **Duration**: ~20 minutes
- **Example**: `/deploy-production`

## 🎨 Color Palette Reference

```css
--neo-dark: #21221F;      /* Primary background */
--neo-cyan: #72BDC2;      /* Primary accent */
--neo-blue: #388B9E;      /* Secondary accent */
--neo-gray: #5C7572;      /* Neutral */
--neo-tan: #988C7F;       /* Warm accent */
```

## 🚀 Quick Start Commands

```bash
# 1. Apply the theme foundation
/apply-neomorph-theme

# 2. Design a component
/design-component HeroSection custom

# 3. Build a page
/build-page home

# 4. Deploy to staging
/deploy-staging

# 5. Deploy to production (after testing)
/deploy-production
```

## 📊 Agent & Command Matrix

| Task | Primary Agent | Command | Duration |
|------|--------------|---------|----------|
| Apply theme | color-system-agent | /apply-neomorph-theme | 30-45 min |
| Design component | neomorph-designer | /design-component | 10-20 min |
| Build component | component-builder | (via /design-component) | 10-20 min |
| Build page | page-builder | /build-page | 15-30 min |
| Deploy staging | deployment-agent | /deploy-staging | ~10 min |
| Deploy production | deployment-agent | /deploy-production | ~20 min |

## 🎯 Recommended Workflow

### Day 1: Foundation (2-3 hours)
1. `/apply-neomorph-theme` - Set up design system
2. Test base components
3. Review color application

### Day 2-3: Components (4-6 hours)
1. `/design-component` for each custom component
2. Test components individually
3. Ensure responsive design

### Day 4-6: Pages (6-9 hours)
1. `/build-page` for each page
2. Test page functionality
3. Optimize performance

### Day 7: Testing & Deploy (3-4 hours)
1. Comprehensive testing
2. `/deploy-staging`
3. QA review
4. `/deploy-production`

## 📚 Documentation Files

- **README.md**: Main documentation with setup and usage
- **CLAUDE.md**: Project context for Claude Code
- **Agent files**: Detailed agent instructions and patterns
- **Command files**: Command usage and workflows

## 🔗 File Links

### Main Documentation
- [README.md](../README.md) - Start here

### Project Context
- [CLAUDE.md](./.claude/CLAUDE.md) - Project overview

### Agents
- [neomorph-designer.md](./.claude/agents/neomorph-designer.md)
- [color-system-agent.md](./.claude/agents/color-system-agent.md)
- [component-builder.md](./.claude/agents/component-builder.md)
- [page-builder.md](./.claude/agents/page-builder.md)
- [deployment-agent.md](./.claude/agents/deployment-agent.md)

### Commands
- [design-component.md](./.claude/commands/design-component.md)
- [apply-neomorph-theme.md](./.claude/commands/apply-neomorph-theme.md)
- [build-page.md](./.claude/commands/build-page.md)
- [deploy-staging.md](./.claude/commands/deploy-staging.md)
- [deploy-production.md](./.claude/commands/deploy-production.md)

## 💡 Tips for Success

1. **Read CLAUDE.md first** - Understand project context
2. **Follow the recommended workflow** - Foundation → Components → Pages → Deploy
3. **Test thoroughly on staging** - Don't rush to production
4. **Use the right agent** - Each agent is specialized for specific tasks
5. **Document changes** - Keep track of what you've modified

## 📞 Getting Help

- Check the README.md for detailed instructions
- Review agent files for technical details
- Review command files for usage examples
- Consult CLAUDE.md for project context

---

**Total Files**: 12 (1 README + 1 CLAUDE.md + 5 agents + 5 commands)  
**Total Agents**: 5  
**Total Commands**: 5  
**Lines of Documentation**: ~5,000+  
**Estimated Setup Time**: 5 minutes  
**Estimated Complete Redesign**: 20-30 hours

Ready to transform nycayen.com! 🚀
