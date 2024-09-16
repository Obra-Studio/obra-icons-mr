import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type QrCodeScanProps = typeof __propDef.props;
export type QrCodeScanEvents = typeof __propDef.events;
export type QrCodeScanSlots = typeof __propDef.slots;
export default class QrCodeScan extends SvelteComponentTyped<QrCodeScanProps, QrCodeScanEvents, QrCodeScanSlots> {
}
export {};
