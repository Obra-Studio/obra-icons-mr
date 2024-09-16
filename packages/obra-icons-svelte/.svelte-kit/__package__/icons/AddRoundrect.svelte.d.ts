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
export type AddRoundrectProps = typeof __propDef.props;
export type AddRoundrectEvents = typeof __propDef.events;
export type AddRoundrectSlots = typeof __propDef.slots;
export default class AddRoundrect extends SvelteComponentTyped<AddRoundrectProps, AddRoundrectEvents, AddRoundrectSlots> {
}
export {};
