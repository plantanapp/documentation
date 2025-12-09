---
id: amazon-s3-storage-integration
title: Amazon S3 Storage Integration
sidebar_label: Amazon S3 Storage Integration
---

> Audience: [`Administrators`](audience.md#systemsecurity-administrators)
>
> Skill Prerequisites: `Administrators`

The Amazon S3 Storage Integration feature offers a straightforward method to integrate with Amazon S3 storage. Once activated, designated folders in your Site Assets will provide direct access to Amazon S3. Files uploaded to these virtual folders will be stored on Amazon S3, and files placed in Amazon S3 by other means will be available through this virtual folder.

The purpose of integrating Amazon S3 storage with Plant an App is to offload file and media asset management to a scalable, reliable, and secure cloud storage service, improving scalability, performance, security, and cost-effectiveness while enabling content distribution.

## `Typical Use Cases`

The typical use case for integrating Amazon S3 storage with Plant an App is to offload the storage and management of files and media assets to a scalable, reliable, and secure cloud storage service. This integration enables users to:

1. **Improve scalability**: As the number of files and media assets grows, traditional file storage systems may face performance and capacity issues. Amazon S3 provides virtually unlimited storage capacity, ensuring that the application can scale smoothly as the storage needs increase.

2. **Enhance performance**: Amazon S3 offers high-speed data transfer rates and low latency, which can improve the performance of file uploads, downloads, and access in the application.

3. **Increase security**: Amazon S3 provides advanced security features, such as data encryption, access control policies, and versioning, to help protect and manage the files and media assets stored in the cloud.

4. **Reduce costs**: By offloading file storage to Amazon S3, organizations can save on storage infrastructure and maintenance costs, and leverage the pay-as-you-go pricing model of Amazon S3.

5. **Enable content distribution**: The integration between Plant an App and Amazon S3 can be used to serve static files, such as images, videos, and documents, directly from the S3 bucket through a content delivery network (CDN) like Amazon CloudFront. This can improve the performance and user experience of the application, especially for users distributed across different geographical locations.


## `Guide`

[Click here for a step-by-step video on using Amazon S3 Storage Integration](https://plantanapp-my.sharepoint.com/:v:/p/dale_warner/EWcs9HCiwhRMnvNa65IJNK8B5dVz7LhBACvdUnXjyFc24g?e=I3XuYI)


## Amazon S3 Storage Integration with Plant an App

This guide will walk you through the process of integrating Amazon S3 storage with Plant an App.

### Prerequisites

Before you proceed, make sure the Amazon S3 storage integration feature is installed in Plant an App.

### Step 1: Create an Amazon IAM User

1. Access your Amazon account and go to the IAM (Identity and Access Management) console.
2. Click on **Users** and then **Add user**.
3. Give the user a unique name.
4. Attach the **S3 Full Access** policy to the user and create the user.

### Step 2: Generate Access Key and Secret Key

1. Go to the **Security Credentials** tab for the user.
2. Click on **Create access key**.
3. Copy the **Access Key** and **Secret Key** for later use.

### Step 3: Create an Amazon S3 Bucket

1. Go to the Amazon S3 management console.
2. Click on **Create bucket**.
3. Give the bucket a globally unique name and choose the appropriate region.

### Step 4: Configure Plant an App for Amazon S3 Integration

1. In Plant an App, go to **File Management** and click on **Manage Folder Types**.
2. Add a new type and give it a unique name.
3. Choose the **DNN Sharp S3 Folder Provider** for the folder provider.
4. Enter the **Access Key** and **Secret Key** from Amazon, choose the region, and enter the bucket name.
5. Click **Update**.

### Step 5: Create a Folder in Plant an App

1. Create a new folder in Plant an App using the S3 demo folder type.
2. Add a test folder to the AWS demo folder in Plant an App. This should also create the test folder in the S3 bucket.

### Step 6: Upload Files to the Folder

1. Upload files to the test folder in Plant an App. The files should also appear in the S3 bucket.

### Step 7: Verify File Access

1. Verify that the files can be accessed through the URL provided in Plant an App.

**Note:** When naming the S3 provider type, avoid using the name of the bucket as it may cause confusion and prevent it from working.