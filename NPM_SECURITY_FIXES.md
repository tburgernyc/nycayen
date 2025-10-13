# NPM Security Vulnerabilities Fix Guide

**Date**: October 12, 2025
**Project**: nycayenmoore.com
**Status**: Fixes Required

---

## 🔍 Vulnerability Summary

**Total Vulnerabilities Found**: 10
- **Critical**: 1
- **High**: 2
- **Moderate**: 4
- **Low**: 3

---

## 🐛 Vulnerabilities Identified

### 1. form-data (Critical)
- **Severity**: Critical
- **Issue**: Uses unsafe random function for choosing boundary
- **Current Version**: 4.0.0-4.0.3
- **Fixed Version**: 4.0.4+
- **Advisory**: https://github.com/advisories/GHSA-fjxv-7rqg-78g4

### 2. @anthropic-ai/claude-code (High - 5 issues)
- **Severity**: High
- **Issues**:
  - Arbitrary code execution due to insufficient startup warning
  - rg vulnerability approval prompt bypass
  - Arbitrary code execution via malicious git email
  - Permission deny bypass through symlink
  - Command execution prior to startup trust dialog
- **Current Version**: <=1.0.119
- **Fixed Version**: 1.0.128+

### 3. axios (High)
- **Severity**: High
- **Issue**: DoS attack through lack of data size check
- **Current Version**: 1.0.0-1.11.0
- **Fixed Version**: 1.12.2+
- **Advisory**: https://github.com/advisories/GHSA-4hjh-wcwx-xvwj

### 4. next (Moderate - 3 issues)
- **Severity**: Moderate
- **Issues**:
  - Cache key confusion for image optimization API routes
  - Content injection vulnerability for image optimization
  - Improper middleware redirect handling (SSRF)
- **Current Version**: 15.0.0-canary.0 - 15.4.6
- **Fixed Version**: 15.5.4+
- **Status**: ✅ Updated in package.json

### 5. tmp (via @inquirer/editor)
- **Severity**: Low
- **Issue**: Arbitrary temporary file/directory write via symbolic link
- **Advisory**: https://github.com/advisories/GHSA-52f5-9888-hmc6

### 6. jsondiffpatch (Moderate)
- **Severity**: Moderate
- **Issue**: XSS vulnerability via HtmlFormatter::nodeBegin
- **Current Version**: <0.7.2
- **Fixed Version**: 0.7.2+
- **Note**: Requires `npm audit fix --force` (breaking change for task-master-ai)

---

## 🛠️ Fix Methods

### Method 1: Automatic Fix (Recommended for Native Linux/Mac)
```bash
# Fix all non-breaking vulnerabilities
npm audit fix

# Verify the fixes
npm audit

# Test the application
npm run build
npm run type-check
```

### Method 2: Manual Package Updates (For WSL Users)
Due to WSL file system issues with node_modules, use this approach:

1. **Move to Windows native terminal** (PowerShell or CMD):
```powershell
cd C:\Users\theburgerllc\nycayenmoore.com
npm audit fix
```

2. **Or use Windows Terminal with PowerShell**:
```powershell
# Open PowerShell as Administrator
Set-Location C:\Users\theburgerllc\nycayenmoore.com
npm audit fix
```

### Method 3: Fresh Install (If other methods fail)
```bash
# Backup your package.json
cp package.json package.json.backup

# Remove node_modules and package-lock (use Windows Explorer for faster deletion on WSL)
# Then run:
npm install
npm audit fix
```

### Method 4: Vercel Deployment (Cloud-based)
If local fixes continue to fail:
1. Commit current code to Git
2. Push to GitHub
3. Deploy to Vercel - Vercel will handle npm install in a Linux environment
4. The vulnerabilities will be automatically fixed during Vercel's build process

---

## 📝 Changes Made

### ✅ Completed
1. **Updated package.json**:
   - `next`: `^15.3.5` → `^15.5.4` (fixes 3 moderate vulnerabilities)

### ⏳ Pending
These require running `npm install` or `npm audit fix`:
- `@anthropic-ai/claude-code`: Update to 1.0.128+
- `axios`: Update to 1.12.2+
- `form-data`: Update to 4.0.4+
- `tmp` / `@inquirer/editor`: Update to fixed versions

---

## 🚨 WSL-Specific Issues Encountered

### Problem
```
npm error ENOTEMPTY: directory not empty
```

### Root Cause
- WSL2 has performance issues with large node_modules directories
- Windows file system (NTFS) accessed through WSL has locking issues
- npm operations timeout due to slow file I/O

### Solutions

#### Option A: Use Windows-Native npm
```powershell
# Open PowerShell
cd C:\Users\theburgerllc\nycayenmoore.com
npm audit fix
```

#### Option B: Move Project to WSL Native Filesystem
```bash
# Copy project to WSL filesystem
cp -r /mnt/c/Users/theburgerllc/nycayenmoore.com ~/nycayenmoore.com
cd ~/nycayenmoore.com
npm audit fix
```

#### Option C: Increase WSL Performance
Add to `.wslconfig` (in Windows user directory):
```ini
[wsl2]
memory=8GB
processors=4
```

---

## 🧪 Verification Steps

After applying fixes, verify everything works:

### 1. Check Audit Status
```bash
npm audit
```
Expected: 9 vulnerabilities fixed, 1 remaining (jsondiffpatch - requires --force)

### 2. Type Check
```bash
npm run type-check
```
Expected: No TypeScript errors

### 3. Build
```bash
npm run build
```
Expected: Successful build

### 4. Test Development Server
```bash
npm run dev
```
Expected: Server starts on http://localhost:3000

---

## 📊 Expected Results

### After Running `npm audit fix`
- **Fixes Applied**: 9/10 vulnerabilities
- **Remaining**: 1 (jsondiffpatch - requires breaking change)

### Vulnerabilities Fixed:
✅ form-data (Critical)
✅ @anthropic-ai/claude-code (5 High issues)
✅ axios (High)
✅ next (3 Moderate issues)
✅ tmp/@inquirer/editor (Low)

### Remaining Vulnerability:
⚠️ jsondiffpatch (Moderate) - Requires `npm audit fix --force`
- Causes breaking change in task-master-ai (0.19.0 → 0.28.0)
- **Recommendation**: Address in Phase 2 after testing

---

## 📋 Action Plan

### Immediate Actions (Today)
1. ✅ Update package.json with Next.js 15.5.4
2. Run `npm audit fix` using Windows PowerShell
3. Verify build works
4. Commit changes

### Short-term (This Week)
1. Test thoroughly in development
2. Deploy to Vercel (will auto-fix during build)
3. Verify production deployment works

### Medium-term (Next Month)
1. Evaluate task-master-ai update to 0.28.0
2. Run `npm audit fix --force` to fix jsondiffpatch
3. Test for breaking changes
4. Update other outdated packages

---

## 🎯 Recommended Immediate Steps

1. **Open PowerShell as Administrator**
2. **Navigate to project**:
   ```powershell
   cd C:\Users\theburgerllc\nycayenmoore.com
   ```
3. **Run audit fix**:
   ```powershell
   npm audit fix
   ```
4. **Verify fixes**:
   ```powershell
   npm audit
   npm run build
   ```
5. **Commit changes**:
   ```bash
   git add package.json package-lock.json
   git commit -m "Fix 9 npm security vulnerabilities

- Update Next.js to 15.5.4 (fixes 3 moderate issues)
- Update form-data to 4.0.4+ (fixes critical issue)
- Update axios to 1.12.2+ (fixes high severity DoS)
- Update @anthropic-ai/claude-code to 1.0.128+ (fixes 5 high issues)
- Update @inquirer/editor dependencies (fixes low severity issue)

Remaining: jsondiffpatch (requires breaking change - deferred)

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"
   ```

---

## 📞 Support & Resources

### Documentation
- [npm audit documentation](https://docs.npmjs.com/cli/v9/commands/npm-audit)
- [WSL Best Practices](https://learn.microsoft.com/en-us/windows/wsl/best-practices)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security)

### Quick Commands
```bash
# Check current vulnerabilities
npm audit

# Fix non-breaking issues
npm audit fix

# Fix all issues (including breaking)
npm audit fix --force

# Generate audit report
npm audit --json > audit-report.json

# Check for outdated packages
npm outdated
```

---

## ✅ Success Criteria

### Checklist
- [ ] npm audit shows 9 vulnerabilities fixed
- [ ] npm run build completes successfully
- [ ] npm run type-check shows no errors
- [ ] Development server starts without issues
- [ ] All pages load correctly
- [ ] Forms still submit properly
- [ ] No console errors

---

## 🔮 Future Considerations

### Phase 2 - After Current Fixes
1. Update task-master-ai to 0.28.0
2. Fix jsondiffpatch vulnerability
3. Test AI chatbot functionality
4. Update other dependencies

### Phase 3 - Long-term Maintenance
1. Set up automated dependency updates (Dependabot)
2. Implement security scanning in CI/CD
3. Regular monthly security audits
4. Keep all dependencies current

---

*Document created by Claude Code*
*Last updated: October 12, 2025*
*Project: nycayenmoore.com*
