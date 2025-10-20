// src/utils/photoLoader.ts

type FolderPath = `/src/assets/photos/${string}/${string}/${string}`;

const allImages: Record<string, {default: string}> = import.meta.glob<{ default: string }>('/src/assets/photos/*/*/*', {
    eager: true,
}) as Record<FolderPath, { default: string }>;

export type PhotoEntry = {
    type: string;
    event: string;
    images: string[];
};

const photoMap: Map<string, Map<string, PhotoEntry>> = new Map<string, Map<string, PhotoEntry>>();

for (const path in allImages) {
    const segments = path.split('/');
    const type = segments[segments.length - 3];
    const event = segments[segments.length - 2];

    if (!photoMap.has(type)) {
        photoMap.set(type, new Map());
    }
    if (!photoMap.get(type)!.has(event)) {
        photoMap.get(type)!.set(event, { type, event, images: [] });
    }

    photoMap.get(type)!.get(event)!.images.push(allImages[path].default);
}

export const getAllPhotoEntries = (): PhotoEntry[] => Array.from(photoMap.values()).reduce((acc, crt) => ([
    ...acc,
    ...Array.from(crt.values())
]), [] as PhotoEntry[]);

export const getEventImages = (type: string, event: string): string[] => {
    return photoMap.get(type)?.get(event)?.images ?? [];
};

export const getEventTypeImages = (type: string): string[] => {
    if (!photoMap.has(type)) {
        return [];
    }
    return Array.from((photoMap.get(type) as Map<string, PhotoEntry>)?.values())[0]?.images ?? [];
};

export const getEventTypeEvents = (type: string): PhotoEntry[] => {
    if (!photoMap.has(type)) {
        return [];
    }
    return Array.from((photoMap.get(type) as Map<string, PhotoEntry>).values()) ?? [];
};
