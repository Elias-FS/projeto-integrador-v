import {BlobServiceClient} from "@azure/storage-blob";

async function uploadImagem(file: any) {
  try {
    const blobServiceClient = new BlobServiceClient("https://dpaschoal.blob.core.windows.net/?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-11-16T03:05:35Z&st=2023-11-15T19:05:35Z&sip=192.168.68.115&spr=https&sig=s6FH8ykiZr%2FJFDaM%2FnXYWUwg2rRhfhgO08brAacDrxs%3D");

    const containerName = "container" + new Date().getTime();

    const containerClient = blobServiceClient.getContainerClient(containerName);

    await containerClient.create();

    const blockBlobClient = containerClient.getBlockBlobClient('teste');
    blockBlobClient.uploadBrowserData(file);
  } catch (err) {
    console.log(err)
  }
}

export default uploadImagem;