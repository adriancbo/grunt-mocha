if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["wombat.coffee"]) {
    _$jscoverage["wombat.coffee"] = [];
    _$jscoverage["wombat.coffee"][1] = 0;
    _$jscoverage["wombat.coffee"][2] = 0;
    _$jscoverage["wombat.coffee"][3] = 0;
    _$jscoverage["wombat.coffee"][4] = 0;
    _$jscoverage["wombat.coffee"][5] = 0;
    _$jscoverage["wombat.coffee"][6] = 0;
    _$jscoverage["wombat.coffee"][7] = 0;
    _$jscoverage["wombat.coffee"][9] = 0;
}

_$jscoverage["wombat.coffee"].source = ["Wombat = (opts) ->", "  console.log \"Log option works\"", "  opts = opts or {}", "  @name = opts.name or \"Wally\"", "  @eat = (food) ->", "    throw Error(\"D:\")  unless food", "    \"nom nom\"", "", "  this", ""];

var Wombat;

_$jscoverage["wombat.coffee"][1]++;

Wombat = function(opts) {
  _$jscoverage["wombat.coffee"][2]++;
  console.log("Log option works");
  _$jscoverage["wombat.coffee"][3]++;
  opts = opts || {};
  _$jscoverage["wombat.coffee"][4]++;
  this.name = opts.name || "Wally";
  _$jscoverage["wombat.coffee"][5]++;
  this.eat = function(food) {
    _$jscoverage["wombat.coffee"][6]++;
    if (!food) {
      throw Error("D:");
    }
    _$jscoverage["wombat.coffee"][7]++;
    return "nom nom";
  };
  _$jscoverage["wombat.coffee"][9]++;
  return this;
};
