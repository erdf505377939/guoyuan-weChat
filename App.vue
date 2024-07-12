<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
  page {
    height: 100%;
  }
  text{
	font-family: PingFang SC;
  }
  .flex-row {
	display: flex;
	flex-direction: row;
  }
  .flex-column {
	display: flex;
	flex-direction: column;
  }
  .flex-just-center {
	justify-content: center;
  }
  .flex-align-center {
	align-items: center;
  }
</style>
