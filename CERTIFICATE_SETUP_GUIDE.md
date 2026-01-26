# Certificate Setup Guide

## 📋 Overview
Your website is now configured to display your actual certificate images in a beautiful 1:1 aspect ratio with click-to-enlarge functionality!

## 🎯 What's Been Updated

### Component Changes
- ✅ Added certificate image display with 1:1 aspect ratio
- ✅ Implemented click-to-enlarge modal for full-size viewing
- ✅ Added smooth hover effects and animations
- ✅ Responsive design for all screen sizes

### Features
1. **1:1 Aspect Ratio**: All certificates display in perfect square format
2. **Click to Enlarge**: Click any certificate to view it in full-screen modal
3. **Hover Effects**: Smooth zoom and overlay on hover
4. **Responsive**: Works perfectly on desktop, tablet, and mobile

## 📥 How to Add Your Certificate Images

### Step 1: Download Your Certificates

Visit each certificate URL and take screenshots or download the certificates:

1. **AI Engineer for Data Scientists Associate**
   - URL: https://www.datacamp.com/certificate/AEDS0019472450806
   - Save as: `datacamp-ai-engineer.png`

2. **Certified Data Science Associate**
   - URL: https://www.datacamp.com/certificate/DSA0017610904765
   - Save as: `datacamp-data-science.png`

3. **Computer Vision Course**
   - URL: https://www.kaggle.com/learn/certification/kianangeloflorendo/computer-vision
   - Save as: `kaggle-computer-vision.png`

4. **Intermediate Machine Learning Course**
   - URL: https://www.kaggle.com/learn/certification/kianangeloflorendo/intermediate-machine-learning
   - Save as: `kaggle-machine-learning.png`

5. **Feature Engineering Course**
   - URL: https://www.kaggle.com/learn/certification/kianangeloflorendo/feature-engineering
   - Save as: `kaggle-feature-engineering.png`

### Step 2: Save Certificate Images

1. Create the certificates folder (already done):
   ```
   public/images/certificates/
   ```

2. Save all 5 certificate images to this folder with the exact names listed above.

### Step 3: Verify

1. Make sure your dev server is running: `npm run dev`
2. Open http://localhost:5173/
3. Scroll to the "Licenses & Certifications" section
4. You should see all 5 certificates displayed in 1:1 ratio
5. Click any certificate to view it in full-screen modal

## 🎨 Image Recommendations

For best results:
- **Format**: PNG or JPG
- **Quality**: High resolution (at least 1000x1000 pixels)
- **Aspect Ratio**: Any (will be automatically cropped to 1:1)
- **File Size**: Keep under 500KB for fast loading

## 🔧 Troubleshooting

### Images Not Showing?
1. Check that images are in `public/images/certificates/` folder
2. Verify file names match exactly (case-sensitive)
3. Clear browser cache and refresh

### Images Look Blurry?
- Use higher resolution images (recommended: 1200x1200 or larger)

### Modal Not Working?
- Check browser console for errors
- Ensure JavaScript is enabled

## 📱 Responsive Behavior

- **Desktop**: Certificates display in a grid (3 columns)
- **Tablet**: 2 columns
- **Mobile**: 1 column (full width)
- **All Devices**: Click to view full-size in modal

## 🎉 What's Next?

Once you add the certificate images:
1. Test on different devices
2. Share your portfolio!
3. Consider adding more certifications as you earn them

---

**Need Help?** Just ask! I'm here to assist with any adjustments or improvements.
