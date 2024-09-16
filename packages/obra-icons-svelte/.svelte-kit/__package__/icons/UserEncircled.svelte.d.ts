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
export type UserEncircledProps = typeof __propDef.props;
export type UserEncircledEvents = typeof __propDef.events;
export type UserEncircledSlots = typeof __propDef.slots;
export default class UserEncircled extends SvelteComponentTyped<UserEncircledProps, UserEncircledEvents, UserEncircledSlots> {
}
export {};
