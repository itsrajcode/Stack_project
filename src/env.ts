

cosnt env = {
    appwrite : {
        endpoint: String (process.env.NEXT_PUBLIC_HOST_URL),
        projectId: String (process.env.NEXT_PUBLIC_PROJECT_ID),
        apikey: String (process.env.APPWRITE_API_KEY),
    }
}
export default env