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
export type UsersProps = typeof __propDef.props;
export type UsersEvents = typeof __propDef.events;
export type UsersSlots = typeof __propDef.slots;
export default class Users extends SvelteComponentTyped<UsersProps, UsersEvents, UsersSlots> {
}
export {};
