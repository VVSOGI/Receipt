import mime from 'mime'
import { NextRequest, NextResponse } from 'next/server'
import { S3 } from 'aws-sdk'
import { createHash, randomUUID } from 'crypto'
import Error from 'next/error'
import * as dateFn from 'date-fns'
import { join } from 'path'
import { mkdir, stat, writeFile } from 'fs/promises'

export async function POST(req: Request) {
    const formData = await req.formData()
    const file = formData.get('file') as Blob | null

    if (!file) {
        return NextResponse.json({ error: 'File blob is required.' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const relativeUploadDir = `/editor/${dateFn.format(Date.now(), 'Y-MM-dd')}`
    const uploadDir = join(process.cwd(), 'public', relativeUploadDir)

    try {
        await stat(uploadDir)
    } catch (e: any) {
        if (e.code === 'ENOENT') {
            await mkdir(uploadDir, { recursive: true })
        } else {
            console.error('Error while trying to create directory when uploading a file\n', e)
            return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
        }
    }

    try {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
        const filename = `${file.name.replace(/\.[^/.]+$/, '')}-${uniqueSuffix}.${mime.getExtension(file.type)}`
        await writeFile(`${uploadDir}/${filename}`, buffer)
        return NextResponse.json({ fileUrl: `${relativeUploadDir}/${filename}` })
    } catch (e) {
        console.error('Error while trying to upload a file\n', e)
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
    }

    // const file = formData.get('file')
    // const cdnPath = process.env.NODE_NCOLUD_CDN_PATH as string
    // const accessKeyId = process.env.NODE_NCLOUD_ACCESS_KEY_ID as string
    // const secretAccessKey = process.env.NODE_NCLOUD_SECRET_ACCESS_KEY as string
    // const endpoint = process.env.NODE_NCLOUD_STORAGE_END_POINT as string
    // const region = process.env.NODE_NCLOUD_STORAGE_REGION as string
    // const bucket = process.env.NODE_NCLOUD_STORAGE_BUCKET as string

    // const storage = `${cdnPath}/${bucket}`

    // const fileId = randomUUID()

    // const prepath = fileId.slice(0, 3)
    // const extension = (file as any).type.split('/')[1]
    // const fileKey = `${prepath}/${fileId}.${extension}`

    // console.log(fileKey)
    // console.log(file.buffer)

    // const s3 = new S3({
    //     endpoint: endpoint,
    //     region: region,
    //     credentials: {
    //         accessKeyId: accessKeyId,
    //         secretAccessKey: secretAccessKey
    //     }
    // })
}
