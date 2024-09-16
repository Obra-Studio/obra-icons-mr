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
export type AlignText4CenterProps = typeof __propDef.props;
export type AlignText4CenterEvents = typeof __propDef.events;
export type AlignText4CenterSlots = typeof __propDef.slots;
export default class AlignText4Center extends SvelteComponentTyped<AlignText4CenterProps, AlignText4CenterEvents, AlignText4CenterSlots> {
}
export {};
