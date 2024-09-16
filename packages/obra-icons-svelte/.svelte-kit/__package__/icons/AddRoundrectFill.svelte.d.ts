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
export type AddRoundrectFillProps = typeof __propDef.props;
export type AddRoundrectFillEvents = typeof __propDef.events;
export type AddRoundrectFillSlots = typeof __propDef.slots;
export default class AddRoundrectFill extends SvelteComponentTyped<AddRoundrectFillProps, AddRoundrectFillEvents, AddRoundrectFillSlots> {
}
export {};
