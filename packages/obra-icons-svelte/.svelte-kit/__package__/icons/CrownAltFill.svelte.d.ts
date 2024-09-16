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
export type CrownAltFillProps = typeof __propDef.props;
export type CrownAltFillEvents = typeof __propDef.events;
export type CrownAltFillSlots = typeof __propDef.slots;
export default class CrownAltFill extends SvelteComponentTyped<CrownAltFillProps, CrownAltFillEvents, CrownAltFillSlots> {
}
export {};
