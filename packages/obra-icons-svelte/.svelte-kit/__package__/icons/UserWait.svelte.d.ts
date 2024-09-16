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
export type UserWaitProps = typeof __propDef.props;
export type UserWaitEvents = typeof __propDef.events;
export type UserWaitSlots = typeof __propDef.slots;
export default class UserWait extends SvelteComponentTyped<UserWaitProps, UserWaitEvents, UserWaitSlots> {
}
export {};
