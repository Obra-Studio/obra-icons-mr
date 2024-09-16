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
export type WrenchAltFillProps = typeof __propDef.props;
export type WrenchAltFillEvents = typeof __propDef.events;
export type WrenchAltFillSlots = typeof __propDef.slots;
export default class WrenchAltFill extends SvelteComponentTyped<WrenchAltFillProps, WrenchAltFillEvents, WrenchAltFillSlots> {
}
export {};
