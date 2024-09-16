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
export type SignatureProps = typeof __propDef.props;
export type SignatureEvents = typeof __propDef.events;
export type SignatureSlots = typeof __propDef.slots;
export default class Signature extends SvelteComponentTyped<SignatureProps, SignatureEvents, SignatureSlots> {
}
export {};
