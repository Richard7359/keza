import {NextResponse} from "next/server";
import {S3Client, PutObjectAclCommand, PutObjectCommand} from "@aws-sdk/client-s3";

const s3Client = new S3Client({ 
    region: process.env.NEXT_PUBLIC_AWS_REGION as string,
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
    } as any
 });

 async function UploadFileToS3(file:Buffer, fileName:string) {
    const fileBuffer = file;
    console.log(fileName);
    const params = {
        Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME as string,
        Key: `courses/${fileName}`,
        Body: fileBuffer,
        ContentType: "image/jpeg",
    }

    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    return fileName;
 }

export async function POST(request: any) {
try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    if(!file) return NextResponse.json({ error: "File is required"}, {status: 400});
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await UploadFileToS3(buffer, file.name);
    return NextResponse.json({ success : true , fileName });
} catch (error : any) {
    return NextResponse.json({ error: `error while uploading : ${error.message}`}, {status: 500});
}

}