package com.example.test2;

import android.support.v7.app.ActionBarActivity;
import android.content.Context;
import android.graphics.Color;
import android.os.Bundle;
import android.view.GestureDetector;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;
import android.widget.ViewFlipper;


public class MainActivity extends ActionBarActivity {
  private Context mContext;
  private NotificationManager mNManager;
  private Notification notify1;
  BitMap LargeBitmap=null;
  private static final int NOTIFYID_1=1;

  private Button btn_show_normal;
  private Button btn_close_normal;
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    mContext=MainActivity.this;
    LargeBitmap=BitMapFactory.decodeResource(getResources(), R.mipmap.d);

}

}