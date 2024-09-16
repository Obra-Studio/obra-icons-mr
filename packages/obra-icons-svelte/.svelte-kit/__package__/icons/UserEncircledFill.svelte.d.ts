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
export type UserEncircledFillProps = typeof __propDef.props;
export type UserEncircledFillEvents = typeof __propDef.events;
export type UserEncircledFillSlots = typeof __propDef.slots;
export default class UserEncircledFill extends SvelteComponentTyped<UserEncircledFillProps, UserEncircledFillEvents, UserEncircledFillSlots> {
}
export {};
