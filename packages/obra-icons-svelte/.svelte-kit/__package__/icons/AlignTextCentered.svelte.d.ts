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
export type AlignTextCenteredProps = typeof __propDef.props;
export type AlignTextCenteredEvents = typeof __propDef.events;
export type AlignTextCenteredSlots = typeof __propDef.slots;
export default class AlignTextCentered extends SvelteComponentTyped<AlignTextCenteredProps, AlignTextCenteredEvents, AlignTextCenteredSlots> {
}
export {};
