import {NextResponse} from "next/server";
import {S3Client, PutObjectAclCommand, PutObjectCommand} from "@aws-sdk/client-s3";

const s3Client = new S3Client({ 
    region: process.env.NEXT_PUBLIC_AWS_REGION as string,
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
    } as any
 });

 function getMimeType(extension: string): string {
    switch (extension.toLowerCase()) {
        case ".pdf":
            return "application/pdf";
        case ".jpg":
        case ".jpeg":
            return "image/jpeg";
        case ".png":
            return "image/png";
        // Add more cases as needed
        default:
            return "application/octet-stream"; // Default to binary stream if unknown
    }
}

 async function UploadFileToS3(file:Buffer, fileName:string, folder:string) {
    const fileBuffer = file;
    const extension = fileName.split('.').pop(); 
    const mimeType = getMimeType(extension as string); 

    const params = {
        Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME as string,
        Key: `${folder}/${fileName}`,
        Body: fileBuffer,
        ContentType: mimeType
        // ContentType: "image/jpeg"
    }

    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    return fileName;
 }

export async function POST(request: any) {
try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const folder = formData.get("folder") as string;
    if(!file) return NextResponse.json({ error: "File is required"}, {status: 400});
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await UploadFileToS3(buffer, file.name, folder);
    return NextResponse.json({ success : true , fileName });
} catch (error : any) {
    return NextResponse.json({ error: `error while uploading : ${error.message}`}, {status: 500});
}

}