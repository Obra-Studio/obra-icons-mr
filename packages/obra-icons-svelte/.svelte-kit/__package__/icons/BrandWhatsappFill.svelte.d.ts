import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BrandWhatsappFillProps = typeof __propDef.props;
export type BrandWhatsappFillEvents = typeof __propDef.events;
export type BrandWhatsappFillSlots = typeof __propDef.slots;
export default class BrandWhatsappFill extends SvelteComponentTyped<BrandWhatsappFillProps, BrandWhatsappFillEvents, BrandWhatsappFillSlots> {
}
export {};
