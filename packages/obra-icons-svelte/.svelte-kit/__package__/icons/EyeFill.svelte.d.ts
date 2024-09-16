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
export type EyeFillProps = typeof __propDef.props;
export type EyeFillEvents = typeof __propDef.events;
export type EyeFillSlots = typeof __propDef.slots;
export default class EyeFill extends SvelteComponentTyped<EyeFillProps, EyeFillEvents, EyeFillSlots> {
}
export {};
