export interface Receipt {
    receiptId: number;
    merchantId: number;
    merchantName: string;
    invoiceEmail: string;
    invoiceDate: string;
    total: string;
    currency: string | null;
    labelId: number;
    labelName: string | null;
    labelColor: string | null;
    hasEmail: boolean;
    hasPdf: boolean;
    hasXml: boolean;
    hasJpg: boolean;
    hasAttachment: boolean;
    hasItems: boolean;
}