const getImage = (path: string, name: string, ext: string) => {
    return new URL(`${path}/${name}.${ext}`, import.meta.url).href;
}

export default getImage;