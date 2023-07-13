import boto3

access_key = 'XXXXXXXXXXXXXXXXXXXX'
secret_key = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

def upload_file_to_s3_using_server_side_encryption(file_name, bucket, object_name=None):
    if object_name is None:
        object_name = file_name

    s3_client = boto3.client('s3')
    response = s3_client.upload_file(file_name, bucket, object_name, ExtraArgs={'ServerSideEncryption': 'AES256'})

    return response

def download_file_from_s3_using_server_side_encryption(file_name, bucket, object_name=None):
    if object_name is None:
        object_name = file_name

    s3_client = boto3.client('s3')
    response = s3_client.download_file(bucket, object_name, file_name, ExtraArgs={'ServerSideEncryption': 'AES256'})

    return response

