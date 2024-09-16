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
export type VialProps = typeof __propDef.props;
export type VialEvents = typeof __propDef.events;
export type VialSlots = typeof __propDef.slots;
export default class Vial extends SvelteComponentTyped<VialProps, VialEvents, VialSlots> {
}
export {};
