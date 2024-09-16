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
export type BrandInstagramFillProps = typeof __propDef.props;
export type BrandInstagramFillEvents = typeof __propDef.events;
export type BrandInstagramFillSlots = typeof __propDef.slots;
export default class BrandInstagramFill extends SvelteComponentTyped<BrandInstagramFillProps, BrandInstagramFillEvents, BrandInstagramFillSlots> {
}
export {};
