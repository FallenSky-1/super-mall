<!--  -->
<template>
  <div>
    <div class="control">
      <ul>
        <li>列表菜单1</li>
        <li>列表菜单2</li>
        <li>列表菜单3</li>
        <li>列表菜单4</li>
        <li>列表菜单5</li>
        <li>列表菜单6</li>
        <li>列表菜单7</li>
        <li>列表菜单8</li>
        <li>列表菜单9</li>
        <li>列表菜单10</li>
        <li>列表菜单11</li>
        <li>列表菜单12</li>
        <li>列表菜单13</li>
        <li>列表菜单14</li>
        <li>列表菜单15</li>
        <li>列表菜单16</li>
        <li>列表菜单17</li>
        <li>列表菜单18</li>
        <li>列表菜单19</li>
        <li>列表菜单20</li>
        <li>列表菜单21</li>
        <li>列表菜单22</li>
        <li>列表菜单23</li>
        <li>列表菜单24</li>
        <li>列表菜单25</li>
        <li>列表菜单26</li>
        <li>列表菜单27</li>
        <li>列表菜单28</li>
        <li>列表菜单29</li>
        <li>列表菜单30</li>
        <li>列表菜单31</li>
        <li>列表菜单32</li>
        <li>列表菜单33</li>
        <li>列表菜单34</li>
        <li>列表菜单35</li>
        <li>列表菜单36</li>
        <li>列表菜单37</li>
        <li>列表菜单38</li>
        <li>列表菜单39</li>
        <li>列表菜单40</li>
        <li>列表菜单41</li>
        <li>列表菜单42</li>
        <li>列表菜单43</li>
        <li>列表菜单44</li>
        <li>列表菜单45</li>
        <li>列表菜单46</li>
        <li>列表菜单47</li>
        <li>列表菜单48</li>
        <li>列表菜单49</li>
        <li>列表菜单50</li>
        <li>列表菜单51</li>
        <li>列表菜单52</li>
        <li>列表菜单53</li>
        <li>列表菜单54</li>
        <li>列表菜单55</li>
        <li>列表菜单56</li>
        <li>列表菜单57</li>
        <li>列表菜单58</li>
        <li>列表菜单59</li>
        <li>列表菜单60</li>
        <li>列表菜单61</li>
        <li>列表菜单62</li>
        <li>列表菜单63</li>
        <li>列表菜单64</li>
        <li>列表菜单65</li>
        <li>列表菜单66</li>
        <li>列表菜单67</li>
        <li>列表菜单68</li>
        <li>列表菜单69</li>
        <li>列表菜单70</li>
        <li>列表菜单71</li>
        <li>列表菜单72</li>
        <li>列表菜单73</li>
        <li>列表菜单74</li>
        <li>列表菜单75</li>
        <li>列表菜单76</li>
        <li>列表菜单77</li>
        <li>列表菜单78</li>
        <li>列表菜单79</li>
        <li>列表菜单80</li>
        <li>列表菜单81</li>
        <li>列表菜单82</li>
        <li>列表菜单83</li>
        <li>列表菜单84</li>
        <li>列表菜单85</li>
        <li>列表菜单86</li>
        <li>列表菜单87</li>
        <li>列表菜单88</li>
        <li>列表菜单89</li>
        <li>列表菜单90</li>
        <li>列表菜单91</li>
        <li>列表菜单92</li>
        <li>列表菜单93</li>
        <li>列表菜单94</li>
        <li>列表菜单95</li>
        <li>列表菜单96</li>
        <li>列表菜单97</li>
        <li>列表菜单98</li>
        <li>列表菜单99</li>
        <li>列表菜单100</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "category",
  data() {
    return {};
  },
  mounted() {
    const bs = new BScroll(document.querySelector(".control"), {
      probeType: 3,
      pullUpLoad:true
    });
    bs.on("pullingUp", () => {
      bs.finishPullUp();
      console.log("到底了");
      
    });
  },
};
</script>
<style scoped>
.control {
  background-color: red;
  height: 300px;
  overflow: hidden;
}
</style>