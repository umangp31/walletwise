/**
 *
 * @param imageBlob Blob of Image
 * @returns CID of image
 */

import { IPFS_UPLOAD_API } from "../constant";

export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDExNDlDRjEzMzdCQkEzNDVCNTYzRjZGNjE3OURiNDVBNmMxZkYzYTgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTA4Mjc2Nzc5NjgsIm5hbWUiOiJMZW5zUGxheSBVcGxvYWQifQ.x8SF5wTMkKh-zKtV795GRwzQRFl4BkHkvroqgXIsM1M";
const uploadImageToIPFS = async (
  imageBlob: Blob | undefined
): Promise<string> => {
  try {
    const headersList = {
      Authorization: `Bearer ${TOKEN}`,
    };
    const filehash = await fetch(IPFS_UPLOAD_API, {
      method: "POST",
      headers: headersList,
      body: imageBlob,
    });
    const data = await filehash.json();
    return data.cid;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error in uploading image to ipfs:", error);
    }
    throw new Error("Something went wrong");
  }
};
export default uploadImageToIPFS;
