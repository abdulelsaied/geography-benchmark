export const fetchFlag = async (countryCode: string): Promise<string> => {
    const url = `https://flagcdn.com/w640/${countryCode}.webp`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("flag image fetch failed");
        }
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        return objectUrl
    } catch (error: any) {
        throw new Error(error.message);
    }
}