# Adding Your Profile Photo

## Steps to add your photo:

1. **Prepare your photo:**
   - Use a high-quality photo (recommended: 400x400 pixels or larger)
   - Square or portrait orientation works best
   - Professional headshot or business casual photo
   - Supported formats: JPG, JPEG, PNG, WebP

2. **Add your photo to the project:**
   - Place your photo file in the `public/images/` directory
   - Name it `profile-photo.jpg` (or update the path in the code)
   - Example: `public/images/profile-photo.jpg`

3. **Update the code:**
   - In `app/page.js`, find the commented Image component (around line 1000)
   - Uncomment the Image component code
   - Update the `src` path if you used a different filename
   - Remove or comment out the placeholder div

## Example of the code to uncomment:

```jsx
<Image
  src="/images/profile-photo.jpg"
  alt="Mahmoud Mamdoh Soliman"
  fill
  className="object-cover rounded-full"
  priority
/>
```

## Current placeholder:
The portfolio currently shows a placeholder with a developer emoji and instructions. Once you add your photo and uncomment the Image component, it will display your actual photo with beautiful animations and effects.

## Features of the photo display:
- ✅ Circular frame with glowing border
- ✅ Hover effects and animations
- ✅ Floating tech icons around the photo
- ✅ Responsive design (different sizes for mobile/desktop)
- ✅ Dark mode support
- ✅ Smooth loading with Next.js Image optimization 