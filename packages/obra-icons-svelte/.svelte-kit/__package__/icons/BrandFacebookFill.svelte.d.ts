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
export type BrandFacebookFillProps = typeof __propDef.props;
export type BrandFacebookFillEvents = typeof __propDef.events;
export type BrandFacebookFillSlots = typeof __propDef.slots;
export default class BrandFacebookFill extends SvelteComponentTyped<BrandFacebookFillProps, BrandFacebookFillEvents, BrandFacebookFillSlots> {
}
export {};
