const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");

init();

//interface
module.exports = {
    storeBlob: () => {
        return new Promise((resolve, reject) => {
            resolve({})
        })
    },

    getBlob: (url) => {
        return new promise((resolve, reject) => {
            resolve([])
        })
    }
}

async function init(){
    // Enter your storage account name and shared key
  const account = process.env.ACCOUNT_NAME || "";
  const accountKey = process.env.ACCOUNT_KEY || "";

  // Use StorageSharedKeyCredential with storage account and account key
  // StorageSharedKeyCredential is only avaiable in Node.js runtime, not in browsers
  const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

  const blobServiceClient = new BlobServiceClient(
    // When using AnonymousCredential, following url should include a valid SAS or support public access
    `https://${account}.blob.core.windows.net`,
    sharedKeyCredential
  );


}