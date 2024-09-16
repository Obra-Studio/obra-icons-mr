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
export type VaultProps = typeof __propDef.props;
export type VaultEvents = typeof __propDef.events;
export type VaultSlots = typeof __propDef.slots;
export default class Vault extends SvelteComponentTyped<VaultProps, VaultEvents, VaultSlots> {
}
export {};
