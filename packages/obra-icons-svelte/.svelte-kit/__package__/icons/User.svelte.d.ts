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
export type UserProps = typeof __propDef.props;
export type UserEvents = typeof __propDef.events;
export type UserSlots = typeof __propDef.slots;
export default class User extends SvelteComponentTyped<UserProps, UserEvents, UserSlots> {
}
export {};
