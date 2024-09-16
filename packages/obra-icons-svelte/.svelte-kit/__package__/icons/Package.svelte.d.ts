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
export type PackageProps = typeof __propDef.props;
export type PackageEvents = typeof __propDef.events;
export type PackageSlots = typeof __propDef.slots;
export default class Package extends SvelteComponentTyped<PackageProps, PackageEvents, PackageSlots> {
}
export {};
