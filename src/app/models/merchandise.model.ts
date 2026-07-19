export interface MerchandiseModel {
    id: number;
    title: string;
    description: string;
    meta: {
        barcode: string;
        qrCode: string;
    };
    images: string[];
    price: number;
    discountPercentage: number;
    sku: string;
}
