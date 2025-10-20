// src/utils/photoLoader.ts

type FolderPath = `/src/assets/photos/${string}/${string}/${string}`;

const allImages = import.meta.glob<{ default: string }>('/src/assets/photos/*/*/*', {
    eager: true,
}) as Record<FolderPath, { default: string }>;

export type PhotoEntry = {
    type: string;
    event: string;
    images: string[];
};

const photoMap = new Map<string, PhotoEntry>();

for (const path in allImages) {
    const segments = path.split('/');
    const type = segments[segments.length - 3];
    const event = segments[segments.length - 2];
    const key = `${type}/${event}`;

    if (!photoMap.has(key)) {
        photoMap.set(key, { type, event, images: [] });
    }

    photoMap.get(key)!.images.push(allImages[path].default);
}

export const getAllPhotoEntries = (): PhotoEntry[] => Array.from(photoMap.values());

export const getEventImages = (type: string, event: string): string[] => {
    return photoMap.get(`${type}/${event}`)?.images ?? [];
};
