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
export type FingerprintProps = typeof __propDef.props;
export type FingerprintEvents = typeof __propDef.events;
export type FingerprintSlots = typeof __propDef.slots;
export default class Fingerprint extends SvelteComponentTyped<FingerprintProps, FingerprintEvents, FingerprintSlots> {
}
export {};
