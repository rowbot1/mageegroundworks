# How to Upload the Logo

To upload the Magee Groundworks LTD logo to your GitHub repository:

## Option 1: Via GitHub Website
1. Go to https://github.com/rowbot1/mageegroundworks
2. Click "Add file" → "Upload files"
3. Drag and drop the logo image or click "choose your files"
4. Name the file `logo.png`
5. Add commit message: "Add company logo"
6. Click "Commit changes"

## Option 2: Via Command Line
1. Save the logo image as `logo.png` in the project folder
2. Run these commands:
   ```bash
   cd /Users/row/Downloads/mageegroundworks
   git add logo.png
   git commit -m "Add company logo"
   git push origin main
   ```

The website is already configured to display the logo once uploaded!