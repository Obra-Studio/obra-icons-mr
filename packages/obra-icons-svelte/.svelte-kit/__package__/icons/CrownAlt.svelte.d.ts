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
export type CrownAltProps = typeof __propDef.props;
export type CrownAltEvents = typeof __propDef.events;
export type CrownAltSlots = typeof __propDef.slots;
export default class CrownAlt extends SvelteComponentTyped<CrownAltProps, CrownAltEvents, CrownAltSlots> {
}
export {};
