public class AnimalAdapter extends BaseAdapter{
	private LinkedList<Animal> mDate;
	private Context mContext;
	public AnimalAdapter(LinkedList<Animal> mDate,Context mContext){
		this.mDate=mDate;
		this.mContext=mContext;
	}
	public int getCount(){
		return mDate.size();
	}
	public Object getItem(int position){
		return null;
	}
	public long getItemId(int position){
		return position;
	}
	public View getView(int position,View convertView,ViewGroup parent){
		
	}
}