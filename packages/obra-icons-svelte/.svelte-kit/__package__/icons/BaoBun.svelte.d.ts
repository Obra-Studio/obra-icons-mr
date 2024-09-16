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
export type BaoBunProps = typeof __propDef.props;
export type BaoBunEvents = typeof __propDef.events;
export type BaoBunSlots = typeof __propDef.slots;
export default class BaoBun extends SvelteComponentTyped<BaoBunProps, BaoBunEvents, BaoBunSlots> {
}
export {};
