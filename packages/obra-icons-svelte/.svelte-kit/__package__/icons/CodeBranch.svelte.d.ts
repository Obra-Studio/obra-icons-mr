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
export type CodeBranchProps = typeof __propDef.props;
export type CodeBranchEvents = typeof __propDef.events;
export type CodeBranchSlots = typeof __propDef.slots;
export default class CodeBranch extends SvelteComponentTyped<CodeBranchProps, CodeBranchEvents, CodeBranchSlots> {
}
export {};
