const mobx = require("../../../src/mobx.ts")

test("correct api should be exposed", function() {
    expect(
        Object.keys(mobx)
            .filter(key => mobx[key] !== undefined)
            .sort()
    ).toEqual(
        [
            "$mobx", // adminstration symbol
            "action",
            "_allowStateChanges",
            "_allowStateChangesInsideComputed",
            "_allowStateReadsEnd",
            "_allowStateReadsStart",
            "_autoAction",
            "autorun",
            "comparer",
            "computed",
            "configure",
            "createAtom",
            "extendObservable",
            "flow",
            "FlowCancellationError",
            "isFlowCancellationError",
            "get",
            "_getAdministration",
            "getAtom",
            "getDebugName",
            "getDependencyTree",
            "has",
            "_getGlobalState",
            "getObserverTree",
            "intercept",
            "_interceptReads",
            "isAction",
            "isArrayLike",
            "isBoxedObservable",
            "isComputed",
            "isComputedProp",
            "_isComputingDerivation",
            "isObservable",
            "isObservableArray",
            "isObservableMap",
            "isObservableSet",
            "isObservableObject",
            "isObservableProp",
            "keys",
            "makeAutoObservable",
            "makeObservable",
            "ObservableMap",
            "ObservableSet",
            "observable",
            "observe",
            "onReactionError",
            "onBecomeObserved",
            "onBecomeUnobserved",
            "Reaction",
            "reaction",
            "remove",
            "_resetGlobalState",
            "runInAction",
            "set",
            "spy",
            "toJS",
            "trace",
            "transaction",
            "untracked",
            "values",
            "entries",
            "when",
            "_startAction",
            "_endAction"
        ].sort()
    )
})

test("mobx has no dependencies", () => {
    const pkg = require("../../../package.json")
    expect(pkg.dependencies).toEqual({})
})
