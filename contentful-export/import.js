const path = require('path');
const contentfulImport = require('contentful-import');

const options = {
    contentFile: path.join(__dirname, 'export.json'),
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    uploadAssets: true,
    assetsDirectory: __dirname
}

contentfulImport(options)
    .then(() => {
        console.log('Data imported successfully');
    })
    .catch((error) => {
        console.error('Error importing:', error);
    })
