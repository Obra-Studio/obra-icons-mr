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
export type BrandThreadsFillProps = typeof __propDef.props;
export type BrandThreadsFillEvents = typeof __propDef.events;
export type BrandThreadsFillSlots = typeof __propDef.slots;
export default class BrandThreadsFill extends SvelteComponentTyped<BrandThreadsFillProps, BrandThreadsFillEvents, BrandThreadsFillSlots> {
}
export {};
