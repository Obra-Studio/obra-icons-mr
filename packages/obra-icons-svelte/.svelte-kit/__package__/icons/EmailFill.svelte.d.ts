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
export type EmailFillProps = typeof __propDef.props;
export type EmailFillEvents = typeof __propDef.events;
export type EmailFillSlots = typeof __propDef.slots;
export default class EmailFill extends SvelteComponentTyped<EmailFillProps, EmailFillEvents, EmailFillSlots> {
}
export {};
